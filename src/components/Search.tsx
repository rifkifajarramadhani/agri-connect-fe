import { useForm } from "@tanstack/react-form";
import { FieldInfo } from "./FieldInfo";
import { Input } from "./ui/input";

const Search = () => {
  interface SearchForm {
    query: string;
  }
  const defaultSearchValues: SearchForm = {
    query: "",
  };

  const formOptions = {
    defaultValues: defaultSearchValues,
  };
  const form = useForm({
    ...formOptions,
    onSubmit: (values) => {
      console.log("Search submitted:", values);
    },
  });

  return (
    <div>
      <form.Field
        name="query"
        children={(field) => (
          <>
            <Input
              type="text"
              placeholder="Search..."
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="bg-white opacity-75"
            />
            <FieldInfo field={field} />
          </>
        )}
      />
    </div>
  );
};

export default Search;
