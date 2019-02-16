module.exports = function(sequelize, DataTypes){
    var Article = sequelize.define("Article",{
        headline: DataTypes.STRING,
        photoPath
    })
}