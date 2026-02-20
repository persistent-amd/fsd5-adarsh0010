import React, { useState } from 'react';

// Inline styles for the entire app (no external CSS)
const styles = {
  appContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: '#333',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
    position: 'relative',
  },
  logo: {
    width: '50px',
    height: '50px',
    position: 'absolute',
    left: '0',
    top: '0',
  },
  mainHeading: {
    width: '100%',
    textAlign: 'center',
    fontSize: '2.5rem',
    margin: '0 auto',
    fontWeight: 'bold',
  },
  topicsSection: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '40px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '20px',
  },
  topicsList: {
    flex: 1,
  },
  topicsListHeading: {
    marginBottom: '10px',
    fontSize: '1.5rem',
    fontWeight: '600',
  },
  listItem: {
    padding: '8px 0',
    cursor: 'pointer',
    fontSize: '1.1rem',
    transition: 'color 0.3s',
  },
  listItemHover: {
    color: '#61dafb',
  },
  counter: {
    width: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '20px',
  },
  counterCircle: {
    width: '40px',
    height: '40px',
    backgroundColor: '#61dafb',
    borderRadius: '50%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentSection: {
    marginTop: '20px',
  },
  topicContent: {
    marginBottom: '30px',
  },
  topicContentHeading: {
    marginBottom: '8px',
    color: '#20232a',
  },
  topicContentText: {
    lineHeight: '1.5',
    fontSize: '1rem',
    color: '#444',
  },
};

// Content for each topic
const topics = [
  { title: 'JSX', content: 'JSX is a syntax extension that looks similar to XML or HTML. It is used with React to describe what the UI should look like.' },
  { title: 'Components', content: 'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.' },
  { title: 'Props', content: 'Props are inputs to components. They are data passed down from a parent component to a child component.' },
  { title: 'State', content: 'State is a built-in React object used to contain data or information about the component.' },
  { title: 'Lifecycle', content: 'Lifecycle methods are hooks that run at different stages of a component’s existence, such as mounting, updating, and unmounting.' },
];

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          style={styles.logo}
        />
        <h1 style={styles.mainHeading}>React Tutorial</h1>
      </header>

      <div style={styles.topicsSection}>
        <div style={styles.topicsList}>
          <h2 style={styles.topicsListHeading}>Topics</h2>
          <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
            {topics.map((topic, index) => (
              <li
                key={index}
                style={styles.listItem}
                onClick={() => setCounter(index + 1)}
                onMouseEnter={(e) => e.target.style.color = styles.listItemHover.color}
                onMouseLeave={(e) => e.target.style.color = ''}
              >
                {topic.title}
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.counter}>
          <div style={styles.counterCircle}>{counter}</div>
        </div>
      </div>

      <div style={styles.contentSection}>
        {topics.map((topic, index) => (
          <section key={index} style={styles.topicContent}>
            <h3 style={styles.topicContentHeading}>{index + 1}. {topic.title}</h3>
            <p style={styles.topicContentText}>{topic.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;
