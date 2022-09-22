import { ContentField } from "./components/ContentField";
import { Form } from "./components/Form";
import { DateProvider } from "./context/DateContext";

import './styleGlobal.scss'

export function App() {
  return (
    <DateProvider>
      <Form />
      <ContentField />
    </DateProvider>
  )
}
