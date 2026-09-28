import {
  createContext,
  useContext,
  useState,
  type ReactNode
} from 'react'

type CommonContextType = {
  commonTitle: string
  setCommonTitle: (title: string) => void
}

const CommonContext = createContext<CommonContextType | undefined>(undefined)

export function CommonProvider({ children }: { children: ReactNode }) {

  const [commonTitle, setCommonTitle] = useState('welcome!')

  return (
    <CommonContext
      value={{
        commonTitle,
        setCommonTitle
      }}
    >
      {children}
    </CommonContext>
  )
}

export function useCommon() {
  const context = useContext(CommonContext)

  if (!context) {
    throw new Error('useCommon must be used within CommonProvider')
  }

  return context
}