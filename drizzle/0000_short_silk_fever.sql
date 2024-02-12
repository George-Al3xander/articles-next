CREATE TABLE IF NOT EXISTS "likes" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pending" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text,
	"title" varchar(60),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"authorId" integer NOT NULL,
	"tags" varchar(256),
	"category" varchar(100),
	"description" varchar(500)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text,
	"title" varchar(60),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"authorId" integer NOT NULL,
	"tags" varchar(256),
	"category" varchar(100),
	"description" varchar(500),
	"updatedAt" date
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"kindeId" varchar(256),
	"name" varchar(50) NOT NULL,
	"email" varchar(256),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"description" varchar(500),
	CONSTRAINT "users_kindeId_unique" UNIQUE("kindeId"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pending" ADD CONSTRAINT "pending_authorId_users_id_fk" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_authorId_users_id_fk" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
