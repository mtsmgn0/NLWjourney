/*
  Warnings:

  - Added the required column `destination` to the `trip` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_trip" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "starts_at" DATETIME NOT NULL,
    "ends_at" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_confirmed" BOOLEAN NOT NULL DEFAULT false,
    "destination" TEXT NOT NULL
);
INSERT INTO "new_trip" ("created_at", "ends_at", "id", "is_confirmed", "starts_at") SELECT "created_at", "ends_at", "id", "is_confirmed", "starts_at" FROM "trip";
DROP TABLE "trip";
ALTER TABLE "new_trip" RENAME TO "trip";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
