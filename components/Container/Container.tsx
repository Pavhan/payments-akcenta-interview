import clsx from "clsx";

interface ContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

const Container = ({children, className, ...props}: ContainerProps) => {
  return (
    <div {...props} className={clsx("max-w-5xl mx-auto px-8", className)}>
      {children}
   </div>
  );
}

export default Container;