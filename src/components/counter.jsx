import { component$, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const counter = useSignal(0);
  return (
    <div>
      <h1 class="text-red-300">Counter</h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick$={() => counter.value++}>Value: {counter.value}</button>
    </div>
  );
});
