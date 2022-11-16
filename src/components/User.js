export default function User({ user, showUser }) {
    // person is a prop containing person data, ex:
    // {id: "...", image: "...", mail: "...", name: "...", phone: "...", title: "..."}

    function handleClick() {
        showUser(user);
    }

    return (
        <article onClick={handleClick}>
            <img src={user.image} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.title}</p>
            <p>
                <a href={`mailto: ${user.mail}`}>{user.mail}</a>
            </p>
        </article>
    );
}
