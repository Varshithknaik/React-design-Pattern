/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, JSX, useEffect, useState } from "react";
import axios from "axios";

// Define a generic interface for resources
interface Resource {
  id: string | number; // Assuming resources have an ID
  [key: string]: any; // Allow other properties
}

// Define a generic interface for the props of the enhanced component
interface EditableResourceProps<T extends Resource> {
  resource: T | null;
  initialResource: T | null;
  onChange: (updates: Partial<T>) => void;
  onPost: () => void;
  onReset: () => void;
}

// Define a generic interface for the HOC's configuration
interface IncludeEditableResourceProps<T extends Resource> {
  Component: ComponentType<React.PropsWithChildren<EditableResourceProps<T>>>;
  resourceId: string | number;
  resourceName: string; // Add resourceName
  resourceUrl: string; // Add apiEndpoint
}

const toCapital = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1, str.length);

const includeUpdatableResource = <T extends Resource>({
  Component,
  resourceName,
  resourceUrl,
}: IncludeEditableResourceProps<T>) => {
  return (props: JSX.IntrinsicAttributes) => {
    const [initialResource, setInitialResource] = useState<T | null>(null);
    const [resource, SetResource] = useState<T | null>(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourceUrl);
        setInitialResource(response.data);
        SetResource(response.data);
      })();
    }, []);

    const onChange = (updates: Partial<T>) => {
      SetResource(resource ? { ...resource, ...updates } : null);
    };

    const onPost = async () => {
      console.log("response.data");
      const response = await axios.post(resourceUrl, {
        [resourceName]: resource,
      });
      SetResource(response.data);
      setInitialResource(response.data);
      console.log("re", response);
    };

    const onReset = () => {
      setInitialResource(initialResource);
    };

    const resourceProps = {
      [resourceName]: resource,
      [`onChange${toCapital(resourceName)}`]: onChange,
      [`onPost${toCapital(resourceName)}`]: onPost,
      [`onReset${toCapital(resourceName)}`]: onReset,
      [`initial${resourceName}`]: [initialResource],
    };

    const typedResourceProps = resourceProps as {
      [key: string]: any;
    } & EditableResourceProps<T>;

    return <Component {...props} {...typedResourceProps} resource={resource} />;
  };
};
export default includeUpdatableResource;
