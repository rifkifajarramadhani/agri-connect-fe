import { useForm } from "@tanstack/react-form";
import { FieldInfo } from "./FieldInfo";

const Search = () => {
  interface SearchForm {
    query: string;
  }
  const defaultSearchValues: SearchForm = {
    query: '',
  }

  const formOptions = {
    defaultValues: defaultSearchValues,
  }
  const form = useForm({
    ...formOptions,
    onSubmit: (values) => {
      console.log('Search submitted:', values);
    }
  })

  return <div>
    <form.Field
      name="query"
      children={(field) => (
        <>
          <input
            type="text"
            placeholder="Search..."
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            className="bg-white rounded-md px-2 py-2"
          />
          <FieldInfo field={field} />
        </>
      )}
    />
  </div>
}

export default Search;