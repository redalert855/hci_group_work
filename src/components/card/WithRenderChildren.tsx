export type WithRenderChildren<T> = {
    children: (args: T) => React.ReactNode;
};
