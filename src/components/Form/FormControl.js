export default function FormControl({ htmlFor, label, ...rest }) {
  return (
    <div className="form-control w-full">
      <label htmlFor={htmlFor} className="label">
        <span className="label-text text-lg font-semibold">{label}</span>
      </label>
      <input {...rest} className="input input-bordered w-full" />
    </div>
  );
}
