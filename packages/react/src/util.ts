import { Children, PropsWithChildren, ReactElement, ReactNode } from 'react'

export type PropsWithSlot = PropsWithChildren<{ slot?: string }>

export const elementsWithoutSlot = (elements: ReactNode | ReactNode[], name: string): ReactNode | ReactNode[] => {
	return Children.map((elements as ReactElement[]), (element: ReactElement): ReactNode => {
		if (element?.props?.slot === name) return
		return element
	})
}

export const findSlot = (elements: ReactNode, name: string): ReactNode => {
	return (Children.toArray(elements) as ReactElement[]).find((element: ReactElement): ReactNode => {
		return element?.props?.slot === name
	})
}
