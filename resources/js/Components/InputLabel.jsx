export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-lg mt-10 text-gray-700 dark:text-white` + className}>
            {value ? value : children}
        </label>
    );
}
