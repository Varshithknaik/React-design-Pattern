/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from "react";
import { searchMeal } from "../api/mealApi";
import { didAbort } from "../api/api";
import axios, { AxiosError } from "axios";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import "react-toastify/dist/ReactToastify.css";

const useFetchMeals = () => {
  const [meals, setMeals] = useState<any[]>([]);

  const abortRef = useRef<AbortController | null>(null);

  const handleQuoteError = (error: unknown) => {
    console.log(axios.isCancel(error), "er");
    if (didAbort(error as AxiosError)) {
      // Request Aborted
      toast.error("Request Aborted");
    } else {
      toast.error("Oh Noooo, Error!");
    }
  };

  const fetchMeals = useCallback(async (query: string) => {
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    try {
      const newMeals = await searchMeal(query, {
        signal: abortRef.current.signal,
      });
      setMeals(newMeals || []);
    } catch (error: unknown) {
      handleQuoteError(error);
    }
  }, []);

  return {
    meals,
    fetchMeals,
  };
};

const Container = styled.div`
  padding-top: 8px;
  max-width: 2xl;
  margin: auto;
`;

const Form = styled.form`
  margin-bottom: 8px;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2xl;
  margin-bottom: 4px;
`;

const MealContainer = styled.div`
  max-height: 60;
  overflow-y: auto;
`;

const MealItem = styled.div`
  padding: 1px;
  background-color: ${(props: any) => (props.odd ? "#ccc" : "transparent")};
`;

const SearchMeal = () => {
  const [query, setQuery] = useState("");

  const { meals, fetchMeals } = useFetchMeals();

  useEffect(() => {
    fetchMeals(query);
  }, [fetchMeals, query]);

  return (
    <Container>
      <ToastContainer />
      <Form>
        <Fieldset>
          <Label htmlFor="meal">Find your lovely meal</Label>
          <Input
            type="text"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            id="meal"
          />
        </Fieldset>
      </Form>
      <div>
        <Title>Meals</Title>
        <MealContainer>
          {meals.map((meal, index) => (
            <MealItem
              style={{
                backgroundColor: index % 2 !== 0 ? "#ccc" : "transparent",
              }}
              key={meal.idMeal}
            >
              <p>{meal.strMeal}</p>
            </MealItem>
          ))}
        </MealContainer>
      </div>
    </Container>
  );
};

export default SearchMeal;

// let's break down how this SearchMeal component and its custom hook useFetchMeals work together,
//  especially focusing on the request cancellation part.

// State Management (SearchMeal):

// The SearchMeal component holds the current search term in the query state variable (useState("")).
// When you type into the input field, the onChange handler updates the query state.
// Fetching Logic (useFetchMeals):

// This custom hook encapsulates the logic for fetching meals.
// It maintains the list of fetched meals in its own state (useState<any[]>([])).
// Crucially, it uses useRef to hold an AbortController instance (abortRef). Refs are good for storing mutable values that
//  don't trigger re-renders when they change, making them suitable for managing things like controllers or timers.
// Triggering the Fetch (useEffect in SearchMeal):

// An useEffect hook inside SearchMeal watches for changes in fetchMeals (which is stable due to useCallback) and query.
// Whenever the query changes (because you typed something), this useEffect runs and calls fetchMeals(query).
// The fetchMeals Function (Inside useFetchMeals):

// This function is wrapped in useCallback([]) so it doesn't get recreated on every render of SearchMeal,
//  preventing unnecessary runs of the useEffect.
// Cancellation - Step 1 (Abort Previous): abortRef.current?.abort(); This is the key line for cancellation.
//  Before starting a new request, it checks if there's an AbortController stored in the ref from a previous call.
//  If there is, it calls .abort() on it. This signals the browser (and Axios, if configured correctly) to cancel
//  the network request associated with that previous controller.
// Cancellation - Step 2 (Prepare for New): abortRef.current = new AbortController(); A new AbortController is created
//  for the request that's about to be made. This new controller is stored in the ref, overwriting the old one.
// API Call: await searchMeal(query, { signal: abortRef.current.signal }); The actual API call is made using searchMeal.
//  Importantly, it passes the signal from the newly created AbortController in the configuration object.
//  The underlying api.get (using Axios) needs to be set up to recognize and use this signal property
//  to make the request cancellable.
// Success: If the searchMeal completes successfully before being aborted, setMeals(newMeals || []) updates the state
//  with the results.
// Error/Abort Handling: If the searchMeal promise rejects, the catch block runs. This happens if:
// There's a network or server error.
// The request was successfully aborted by a subsequent call to fetchMeals (which called abort() on this request's controller).
// Error Handling (handleQuoteError):

// This function receives the error from the catch block.
// didAbort(error as AxiosError) checks if the error object indicates that the request was cancelled
//  (likely by checking axios.isCancel(error) or error.name === 'AbortError').
// If didAbort returns true, it means the request was indeed cancelled (likely because you typed again quickly),
//  and the "Request Aborted" toast is shown.
// Otherwise, a generic error toast is displayed.
// In simple terms: Every time you type a character, the component tries to fetch meals for the new query.
//  But before it does, it tells the previous fetch attempt (if it's still running) to stop.
//  Then, it starts the new fetch, making sure this new fetch can also be stopped if you type again before
//  it finishes. This prevents old, slow search results from overwriting newer ones and avoids unnecessary
//  processing of outdated requests.
