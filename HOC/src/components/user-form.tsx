import { UserProps } from "./user-info";
import includeUpdatableUser from "./include-updatable-user";
import includeUpdatableResource from "./include-editable-resource";

interface UserFormProps {
  user: UserProps;
  initialUser: UserProps;
  onChangeUser: (updates: Partial<UserProps>) => void;
  onPostUser: () => void;
  onResetUser: () => void;
}

const UserForm = ({
  user,
  onChangeUser,
  onPostUser,
  onResetUser,
}: UserFormProps) => {
  const { name, age } = user || {};

  return user ? (
    <>
      <label>
        Name:
        <input
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
        />
      </label>
      <button onClick={onPostUser}>Post</button>
      <button onClick={onResetUser}>Reset</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  ) : (
    <h3>Loading....</h3>
  );
};

// export const UserInfoForm = includeUpdatableUser({
//   Component: UserForm,
//   userId: "3",
// });

export const UserInfoForm = includeUpdatableResource({
  Component: UserForm,
  resourceName: "user",
  resourceUrl: "/api/users/3",
});
