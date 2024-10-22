import { cn } from "@lib/utils";

interface ContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

const Container = ({children, className, ...props}: ContainerProps) => {
  return (
    <div {...props} className={cn("max-w-5xl mx-auto px-8 py-12", className)}>
      {children}
   </div>
  );
}

export default Container;