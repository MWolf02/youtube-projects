// Defining and exporting the User component.
export default function User({ user }) {
    // Destructuring user object to extract required properties.
    const {
      avatar_url,
      followers,
      following,
      public_repos,
      name,
      login,
      created_at,
    } = user;
  
    // Creating a Date object from the 'created_at' property to display user creation date.
    const createdDate = new Date(created_at);
  
    // Constructing a string representation of the user's creation date in the format: "Day Month Year".
    // - `${createdDate.getDate()}` retrieves the day of the month.
    // - `${createdDate.toLocaleString("en-us", { month: "short" })}` retrieves the abbreviated name of the month.
    // - `${createdDate.getFullYear()}` retrieves the year.
    
    // Returning JSX to render the User component.
    return (
      <div className="user">
        {/* Rendering user avatar */}
        <div>
          <img src={avatar_url} alt="User" className="avatar" />
        </div>
        {/* Rendering user information */}
        <div className="information">
          {/* Rendering user name with a link to the Github profile */}
          <a href={`https://github.com/${login}`} target='_blank'>{name || login}</a>
          {/* Rendering user creation date */}
          <p>
            User joined on{" "}
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
              month: "short",
            })} ${createdDate.getFullYear()}`}
          </p>
          {/* Rendering number of public repositories */}
          <p>Public Repos: {public_repos}</p>
          {/* Rendering number of followers */}
          <p>Followers: {followers}</p>
          {/* Rendering number of accounts the user is following */}
          <p>Following: {following}</p>
        </div>
      </div>
    );
  }
  
