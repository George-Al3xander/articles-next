CREATE TABLE IF NOT EXISTS "likes" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" varchar NOT NULL,
	"postId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pending" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"title" varchar(60) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"authorId" varchar NOT NULL,
	"tags" varchar(256) NOT NULL,
	"category" varchar(100) NOT NULL,
	"description" varchar(500) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"title" varchar(60) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"authorId" varchar NOT NULL,
	"tags" varchar(256) NOT NULL,
	"category" varchar(100) NOT NULL,
	"description" varchar(500) NOT NULL,
	"updatedAt" date
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_postId_posts_id_fk" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
