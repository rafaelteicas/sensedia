import { relations } from "drizzle-orm";
import {
    integer,
    pgTable,
    primaryKey,
    text,
    timestamp,
    uuid,
} from "drizzle-orm/pg-core";
import { AdapterAccount } from "next-auth/adapters";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().notNull(),
    username: text("username").notNull().unique(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    city: text("city"),
    days: text("days"),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
});

export const accounts = pgTable(
    "account",
    {
        userId: text("userId")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        type: text("type").$type<AdapterAccount["type"]>().notNull(),
        provider: text("provider").notNull(),
        providerAccountId: text("providerAccountId").notNull(),
        refresh_token: text("refresh_token"),
        access_token: text("access_token"),
        expires_at: integer("expires_at"),
        token_type: text("token_type"),
        scope: text("scope"),
        id_token: text("id_token"),
        session_state: text("session_state"),
    },
    (account) => ({
        compoundKey: primaryKey({
            columns: [account.provider, account.providerAccountId],
        }),
    })
);

export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").notNull().primaryKey(),
    userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const posts = pgTable("posts", {
    id: uuid("id").primaryKey().notNull(),
    user_id: text("user_id")
        .unique()
        .references(() => users.id, { onDelete: "cascade" }),
    content: text("content"),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
});

export const albums = pgTable("albums", {
    id: uuid("id").primaryKey().notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
});

export const usersToAlbums = pgTable(
    "user_albums",
    {
        userId: uuid("user_id")
            .notNull()
            .references(() => users.id),
        albumId: uuid("album_id")
            .notNull()
            .references(() => albums.id),
    },
    (t) => ({
        pk: primaryKey({ columns: [t.userId, t.albumId] }),
    })
);

export const usersRelations = relations(users, ({ many }) => ({
    posts: many(posts),
    albums: many(albums),
}));

export const postsRelations = relations(posts, ({ one }) => ({
    author: one(users, {
        fields: [posts.user_id],
        references: [users.id],
    }),
}));

export const usersToAlbumsRelations = relations(usersToAlbums, ({ one }) => ({
    group: one(albums, {
        fields: [usersToAlbums.albumId],
        references: [albums.id],
    }),
    user: one(users, {
        fields: [usersToAlbums.userId],
        references: [users.id],
    }),
}));
