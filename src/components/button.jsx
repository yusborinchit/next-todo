function Button({ onClick = () => {}, children }) {
  return (
    <button onClick={onClick} className='px-6 py-1 text-lg font-bold text-white rounded-md bg-emerald-500'>
      {children}
    </button>
  );
}

export default Button;
