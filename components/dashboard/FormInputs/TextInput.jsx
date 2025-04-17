export default function TextInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        {...register(`${name}`, { required: isRequired })}
        type={type}
        name={name}
        id={name}
        autoComplete={name}
        className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        placeholder={`Type ${label}`}
        required=""
      />
      {errors[name] && (
        <span className="text-sm text-red-600">{label} is required</span>
      )}
    </div>
  );
}
