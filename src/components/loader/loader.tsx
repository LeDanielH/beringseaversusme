import React from 'react'
import { LoaderBackdrop, LoaderCircle } from './loader.styles'
import { Spacer } from '@householdjs/elements'

export const Loader = () => (
	<LoaderBackdrop>
		<LoaderCircle />
		<Spacer top>{/* TODO: add paragraph */}</Spacer>
	</LoaderBackdrop>
)
