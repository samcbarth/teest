import BrandProjectTemplatePreview from "./components/BrandProjectTemplatePreview";
import { projectConfig } from "./config/project.config";

export default function App() {
  return <BrandProjectTemplatePreview config={projectConfig} />;
}
