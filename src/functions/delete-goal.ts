import { db } from '../db'
import { goalCompletions, goals } from '../db/schema'
import { eq } from 'drizzle-orm'

export async function deleteGoal(goalId: string) {
  await db.delete(goalCompletions).where(eq(goalCompletions.goalId, goalId))
  await db.delete(goals).where(eq(goals.id, goalId))
}
