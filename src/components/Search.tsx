import { useForm } from "@tanstack/react-form";
import { FieldInfo } from "./FieldInfo";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { SearchIcon } from "lucide-react";

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
    <div className="min-w-112.5">
      <form.Field
        name="query"
        children={(field) => (
          <>
            <InputGroup>
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput
                type="text"
                placeholder="Search posts, communities, people ..."
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </InputGroup>
          </>
        )}
      />
    </div>
  );
};

export default Search;
