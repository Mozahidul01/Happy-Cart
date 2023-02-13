export default function FormControl({ htmlFor, label, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={htmlFor} className="form-label">
        {label}
      </label>
      <input {...rest} className="form-input" />
    </div>
  );
}
