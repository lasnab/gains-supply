function EmailCollectionForm() {
  return (
    <div className="flex flex-col border">
      <CustomForm />
    </div>
  );
}

function CustomForm() {
  const inputStyles =
    'form-control w-full mb-2 md:mr-2 md:m-0 px-3 py-2 font-normal text-primary bg-neutral';
  return (
    <div className="flex flex-col border">
      <div className="text-neutral text-center pt-1 text-3xl font-bold uppercase ">
        subscribe
      </div>
      <form className="flex flex-col md:flex-row justify-center  bg-primary p-2">
        {/* <input
          type="text"
          className={inputStyles}
          id="name-input"
          placeholder="YOUR NAME"
        /> */}
        <input
          type="email"
          className={inputStyles}
          id="email-input"
          placeholder="YOUR EMAIL"
        />
        <button
          type="submit"
          className="bg-secondary h-10 p-2 md:w-64 text-primary font-bold text-bold uppercase hover:text-accent transition duration-150 hover:scale-y-105"
        >
          Lets Go
        </button>
      </form>
      <div className="text-xs font-extralight text-neutral text-center capitalize pb-2">
        By Submitting Your Information, you consent to us sending you emails for
        the purposes of marketing. Please contact us for more information.
      </div>
    </div>
  );
}

export default EmailCollectionForm;
