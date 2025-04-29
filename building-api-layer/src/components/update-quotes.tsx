import { useMutation, useQueryClient } from "react-query";
import { postQuotes, resetQuotes } from "../api/quoteApi";
import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

type QuotesFrom = {
  author: string;
  quote: string;
};

const Container = styled.div`
  padding: 8px;
  max-width: 2xl;
  margin: auto;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2xl;
  margin-bottom: 4px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: lg;
  margin: auto;
  text-align: left;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label``;

const Input = styled.input``;

const Button = styled.button<{ isLoading?: boolean }>`
  background-color: ${(props) => (props.isLoading ? "#CBD5E0" : "#4299E1")};
  color: ${(props) => (props.isLoading ? "#A0AEC0" : "#fff")};
  padding: 12px 16px;
  border: none;
  cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
`;

const UpdateQuotes = () => {
  const queryClient = useQueryClient();

  const createQuotesMutation = useMutation(postQuotes);
  const resetQuotesMutation = useMutation(() => resetQuotes());

  const [form, setForm] = useState<QuotesFrom>({
    author: "",
    quote: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((_form) => ({ ..._form, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { author, quote } = form;
    if (!author || !quote) {
      alert("You have to enter information first");
      return;
    }
    await createQuotesMutation.mutate(form, {
      onSuccess: () => {
        setForm({ author: "", quote: "" });
        queryClient.invalidateQueries("top-quotes");
        toast.success("Quote Created");
      },
    });
  };

  const onReset = async () => {
    await resetQuotesMutation.mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries("top-quotes");
        toast.success("Quotes Reseted");
      },
    });
  };

  return (
    <Container>
      <Title>Create quote</Title>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Author</Label>
          <Input
            type="text"
            name="author"
            value={form.author}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Quote</Label>
          <Input
            type="text"
            name="quote"
            value={form.quote}
            onChange={onChange}
          />
        </FormGroup>
        <div style={{ textAlign: "center" }}>
          <Button
            type="submit"
            isLoading={createQuotesMutation.isLoading}
            disabled={createQuotesMutation.isLoading}
          >
            {createQuotesMutation.isLoading
              ? "Creating quote..."
              : "Create quote"}
          </Button>
          <Button
            type="button"
            onClick={onReset}
            isLoading={resetQuotesMutation.isLoading}
            disabled={resetQuotesMutation.isLoading}
          >
            {resetQuotesMutation.isLoading ? "Resetting..." : "Reset quotes"}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default UpdateQuotes;
