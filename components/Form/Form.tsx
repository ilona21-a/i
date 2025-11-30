import css from "./Form.module.css";

interface FormProps {
  onSubmit: () => void;
}

const Form = ({ onSubmit }: FormProps) => {
  return (
    <section aria-labelledby="book-title" className={css.form}>
      <h2 id="book-title" className={css.title}>
        Book your car now
      </h2>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>

      <form action={onSubmit}>
        <div>
          <input
            className={`${css.name} ${css.input}`}
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Name*"
            required
          />
        </div>

        <div>
          <input
            className={`${css.email} ${css.input}`}
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Email*"
            required
          />
        </div>

        <div>
          <input
            className={`${css.date} ${css.input}`}
            type="text"
            id="date"
            name="date"
            placeholder="Booking date"
          />
        </div>

        <div>
          <textarea
            className={`${css.comment} ${css.input}`}
            id="comment"
            name="comment"
            placeholder="Comment"
          ></textarea>
        </div>

        <button className={css.button} type="submit">
          Send
        </button>
      </form>
    </section>
  );
};

export default Form;