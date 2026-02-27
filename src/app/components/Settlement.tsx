import { DateField } from './shared/DateField'
import { InputField } from './shared/InputField'

const Settlement = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-4 gap-6">
      <DateField label="First Payment Date Expiration" theme={theme} />
      <InputField label="First Payment Amount" placeholder="$0.00" type="text" theme={theme} />
      <DateField label="Second Payment Date Expiration" theme={theme} />
      <InputField label="Second Payment Amount" placeholder="$0.00" type="text" theme={theme} />
      <DateField label="Third Payment Date Expiration" theme={theme} />
      <InputField label="Third Payment Amount" placeholder="$0.00" type="text" theme={theme} />
      <DateField label="Date of Settlement Expiration" theme={theme} />
      <InputField label="Settlement Amount" placeholder="$0.00" type="text" theme={theme} />
      </div>
  </div>
  )
}

export default Settlement