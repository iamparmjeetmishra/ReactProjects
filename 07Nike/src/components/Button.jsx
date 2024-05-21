const Button = ({
  label, iconURL, className
}) => {
  return (
    <button
      className={`${className} flex justify-center items-center gap-2 px-7 py-4 border border-coral-red font-montserrat text-lg leading-none rounded-full text-white  bg-coral-red`}
      >
      {label}
      <img
        src={iconURL}
        alt="Button Icon"
        className={`ml-2 rounded-full w-5 h-5  `}
      />
    </button>
  )
}

export default Button