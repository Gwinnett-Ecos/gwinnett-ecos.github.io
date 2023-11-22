export type MarkerProps = {
  title: string;
  icon: string;
  id: string;
};

export default function Marker({ title, id, icon }: MarkerProps) {
  return (
    <a id={id} data-title={title} data-icon={icon} hidden aria-hidden="true" />
  );
}
