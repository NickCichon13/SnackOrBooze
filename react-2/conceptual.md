### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

1: React Router is a JavaScript framework that handels client and server-side routing  in React applications. It also allows for single page web applications to navigate without having to refresh the page. 

- What is a single page application?

1: A single page application loads only a single web document which also updates the body content of that single page.

- What are some differences between client side and server side routing?

1: Server side sends fully rendered HTML to the client 

2: Client side renders web pages on the client side using JavaScript for dynamic updates.

- What are two ways of handling redirects with React Router? When would you use each?

1: the two ways of handeling redirects with react Router is using Navigate and useNavigate. Navigate can be used when a user has logged in and can be redirected to the home page. useNaigae could be best used when a user is using a form for submitting data or an API call. 

- What are two different ways to handle page-not-found user experiences using React Router? 

1: by using the <Switch /> and adding NotFound component int he <Route/> you will be able to ensure that the route will only work when the user hits an unregistered route.

- How do you grab URL parameters from within a component using React Router?

1: useParamas Hook.

- What is context in React? When would you use it?

1: Context is a way to manage state globally. this can also be used with useState Hooks that will allow you to share state between deeply nested compnents.

- Describe some differences between class-based components and function
  components in React.

  1: Functional components are the most common components, to simplify this they are just JavaScript functions. The biggest difference is the use and managment of state and being able to pass down functional components. class-based componenets are harder to manage state functional components makes it easier with Hooks. 

- What are some of the problems that hooks were designed to solve?

1: Hooks were desinged to replace class-based components and the use of state with Hooks is more managable than class-based components. 