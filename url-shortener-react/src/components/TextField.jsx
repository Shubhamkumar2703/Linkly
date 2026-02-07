const TextField = ({
  label,
  id,
  type = "text",
  errors,
  register,
  required = false,
  message,
  className = "",
  min,
  value,
  placeholder,
}) => {
  const hasError = errors?.[id]?.message;

  return (
    <div className="flex flex-col gap-1.5">
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}

      {/* Input */}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        className={`
          w-full px-3 py-2 rounded-lg text-sm text-slate-800
          bg-white border outline-none transition
          placeholder:text-slate-400
          focus:ring-2 focus:ring-indigo-950 focus:border-indigo-500
          ${hasError ? "border-red-500 focus:ring-red-400" : "border-slate-300"}
          ${className}
        `}
        {...register(id, {
          required: required ? { value: true, message } : false,

          minLength: min
            ? { value: min, message: `Minimum ${min} characters required` }
            : undefined,

          pattern:
            type === "email"
              ? {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                }
              : type === "url"
              ? {
                  value:
                    /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[^\s]*)?$/,
                  message: "Please enter a valid URL",
                }
              : undefined,
        })}
      />

      {/* Error Message */}
      {hasError && (
        <p className="text-xs font-medium text-red-600">
          {errors[id]?.message}
        </p>
      )}
    </div>
  );
};

export default TextField;
