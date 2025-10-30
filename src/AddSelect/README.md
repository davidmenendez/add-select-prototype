# Add Select prototype for IBM Products Next

Fast prototype using `yarn create vite` for the Next version of IBM Products Add & Select

## Architecture

The main purpose of this prototype is to develop a blueprint for the new architecture for Add & Select with composability in mind. The current list of sub components are based on the current in-progress prototype. Here is an example implementation to demonstrate the initial idea for general scaffolding

```jsx
<AddSelect>
  <AddSelectHeader />
  <AddSelectBody>
    <AddSelectColumn>
      <AddSelectItem />
      <AddSelectItem />
      <AddSelectItem />
    </AddSelectColumn>
  </AddSelectBody>
  <AddSelectSidebar />
  <AddSelectFooter />
</AddSelect>
```

### Sub components

- `AddSelect` - the overall containment div
- `AddSelectHeader` - the header area where general props like `title` and `description` are used
- `AddSelectBody` - the main content area for add & select. this is where the items should be displayed. this area should also allow for users to provide their own filtering, breadcrumbs, etc.
- `AddSelectColumn` - a container element that should just be used to semantically separate items in a hierarchy view. it should also be able to provide users with a slot for column filtering and sorting, or anything else the user might want the header area of the column for.
- `AddSelectItem` - the main container for displaying the item data. this component should accept general props like `type` to determine if a checkbox or radio button is showed or `chevron` if the user wants to use a built in chevron button. this area should also allow users to provide their own additional content like modifiers or meta data views.
- `AddSelectSidebar` - the container area meant to display selected items or anything else the user would want to slot into this area.
- `AddSelectFooter` - the container area for the primary and secondary buttons. it should be able to accept general props like `primaryButtonText` & `onClickPrimaryButton` to use default built in buttons and also slots for whatever else the user wants to put in this area.

The main focus with this implementation is to make the components as unopinionated and as dumb as possible. The original implementation of Add & Select was far too rigid and relied on a very complicated data object to display everything, which took all control away from the user. With this implementation, the components are meant to just be presentational. `AddSelect` shouldn't need to maintain any state for the user.

Consider this section of code from `SingleSelectExample`:

```jsx
const SingleSelectExample = () => {
  const [selected, setSelected] = useState("");
  const handleSelect = (value: string) => {
    setSelected(value);
  };
  const handleSubmit = () => {
    console.log(selected);
  };
  return (
    <AddSelect>
      <AddSelectHeader />
      <AddSelectBody>
        <ul>
          {data.map((entry) => (
            <AddSelectItem
              type="single"
              onChange={handleSelect}
              value={entry.name}
              selected={entry.name === selected}
            />
          ))}
        </ul>
      </AddSelectBody>
      <AddSelectFooter
        primaryButtonText="Add"
        onClickPrimaryButton={handleSubmit}
      />
    </AddSelect>
  );
};
```

In the original implementation, the state of which items were selected would have been handled internally in the component. This led to issues where users were unable to manipulate the selected state from outside of the component, but here the user is in charge of displaying the data, maintaining the `selected` state, and the submit handler. Since the user is handling all of that state the Add & Select components are free to just be purely presentational.
