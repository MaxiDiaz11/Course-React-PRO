export type CounterAction =
  | { type: "increseBy"; payload: { value: number } }
  | { type: "reset" };

export const doReset = (): CounterAction => ({
  type: "reset",
});

export const doIncreseBy = (value: number): CounterAction => {
  return {
    type: "increseBy",
    payload: { value },
  };
};
