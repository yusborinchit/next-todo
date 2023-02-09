function Button({ onClick = () => {}, children }) {
  return (
    <button
      onClick={onClick}
      className='px-6 py-1 text-lg font-black text-white uppercase transition-colors rounded-md bg-emerald-500 hover:bg-emerald-600'
    >
      {children}
    </button>
  );
}

export default Button;
