import { useEffect, useState, useRef } from 'react';

const useIO = (options) => {
    const [elements, setElements] = useState();
    const [entries, setEntries] = useState();

    // instanciate a ref to be use to ref the new IO object
    const observer = useRef(null);

    // custom options to be passed to the intersection observer
    const { root, rootMargin, threshold } = options || {};

    useEffect(() => {
        if (elements) {
            observer.current = new IntersectionObserver(
                (ioEntries) => {
                    setEntries(ioEntries);
                },
                {
                    root,
                    rootMargin,
                    threshold,
                }
            );

            elements.forEach((element) => {
                observer.current.observe(element);
            });
        }
        // on unmounting disconnects the intersection observer
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [elements, root, rootMargin, threshold]);
    // returns the elements we want to use into our components
    return [entries, setElements, observer.current];
};

export default useIO;
