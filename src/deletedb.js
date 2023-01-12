function deleteAllData(db) {
    db.clear()
}

async function deleteXP(userId, guildId, db) {
    await db.delete(`${userId}-${guildId}-user`)
}

module.exports = {
    deleteAllData: deleteAllData,
    deleteUserData: deleteXP
}