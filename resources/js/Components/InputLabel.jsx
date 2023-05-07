export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-xl mt-10 text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}
