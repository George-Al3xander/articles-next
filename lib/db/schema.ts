import { date, integer, pgTable, serial, text, timestamp,varchar } from 'drizzle-orm/pg-core';


//first users register date - 2024-01-01T06:37:23+0200
export const users = pgTable("users",{
  id: serial('id').primaryKey(),
  kindeId: varchar('kindeId', { length: 256 }).unique(),
  name: varchar("name",{length: 50}).notNull(),  
  email: varchar('email', { length: 256 }).unique(),
  //createdAt: timestamp("createdAt").defaultNow().notNull(),  
  //description: varchar('description', { length: 500 }),
})


const postBase = {
  id: serial('id').primaryKey(),
  content: text('content'),
  title: varchar('title', { length: 60 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  authorId: integer('authorId').references(() => users.id).notNull(),  
 // tags: varchar('tags', { length: 256 }),
 // category: varchar('category', { length: 100 }),
 // description: varchar('description', { length: 500 }),
}

export const posts = pgTable("posts",{
    ...postBase,
    updatedAt: date("updatedAt"),
})

export const pending = pgTable("pending",postBase)

export const likes = pgTable("likes",{
  id: serial('id').primaryKey(),
  userId: integer('userId').references(() => users.id).notNull(), 
})


