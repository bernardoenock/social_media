export interface IOption {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const selectOptions: readonly IOption[] = [
  { value: "Post", label: "Post", isFixed: true },
  { value: "Artigo", label: "Artigo", isDisabled: true },
  { value: "Evento", label: "Evento" },
];
