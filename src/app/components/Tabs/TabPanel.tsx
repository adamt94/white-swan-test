import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TabPanelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const TabPanel: React.FC<TabPanelProps> = ({ children, ...rest }) => {
  return (
    <div role="tabpanel" {...rest}>
      {children}
    </div>
  );
};

export default TabPanel;
