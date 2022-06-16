import { Component, JSX } from "solid-js";

type Props = {
  children: JSX.Element;
};

export const AuthProvider: Component<Props> = (props: Props) => {
  // const [client] = createResource(async () => {
  //   const client = await getAuth0ClientAsync();
  //   console.log({ client });
  //   return client;
  // });

  // console.log({ client });

  // createEffect(() => {
  //   const data = client();
  //   console.log("data", data);
  // });

  return <>{props.children}</>;
};
