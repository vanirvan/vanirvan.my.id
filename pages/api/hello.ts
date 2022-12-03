// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

// Edge Runtime
// Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes

import type { NextRequest } from 'next/server'

export const config = {
	runtime: 'experimental-edge',
}

export default async function (req: NextRequest) {
	return new Response(JSON.stringify({ name: 'John Doe' }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
