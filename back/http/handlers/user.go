package handlers

import (
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jserranojunior/intellect/backgo/models"
)

// UserCreate a user controllers
func UserCreate(c *gin.Context) {
	fmt.Println("AQUI")
	user := models.User{Name: "Jack", Email: "jorgeserraojuniorra@hotmail.com", Password: "123", Cellphone: "(11) 94643-9695", BirthDate: time.Now()}
	result := DB.Create(&user) // pass pointer of data to Create
	if result.Error != nil {
		fmt.Println(result.Error)
	} else {
		fmt.Println(result.RowsAffected)
	}
	fmt.Println(user.ID) // returns inserted data's primary key
}
