import { categories } from "../App.interfaces";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface FormProps {
    onSubmit: (data: FormData) => void
}

const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number({ invalid_type_error: 'Amount is required.'}).min(0.01).max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: 'Category is required.'})
  }),
});

type FormData = z.infer<typeof schema>;

const Form = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form onSubmit={handleSubmit(data => {
        onSubmit(data);
        reset();
      })}>
        <div className="mb-3">
          <label htmlFor="description">Description</label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && <p className="text-danger">{errors.description.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="amount">Amount</label>
          <input
            {...register("amount", {valueAsNumber: true})}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="category">Category</label>
          <select {...register('category')} id="category" className="form-select">
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && <p className="text-danger">{errors.category.message}</p>}
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
    </>
  );
};

export default Form;
