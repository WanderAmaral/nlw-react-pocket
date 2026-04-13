import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { deleteGoal } from '../../functions/delete-goal'

export const deleteGoalRoute: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/goals/:id',
    {
      schema: {
        params: z.object({
          id: z.string(),
        }),
      },
    },
    async request => {
      const { id } = request.params
      await deleteGoal(id)
    }
  )
}
