import type { PropsWithChildren, ReactNode } from "react";

interface CardProps extends PropsWithChildren {
    title:string;
    // custom defined type - react node.
    footer? : ReactNode  
}




// here title as well as children are mandatory we have to write that in props then optional like here as footer.
export function Card( {title, children, footer }: CardProps ){


    return(
        <section>
            <h2>{title}</h2>
            <div>{children}</div>
            {footer && 
            <footer>{footer}</footer>}
        </section>
    )
}