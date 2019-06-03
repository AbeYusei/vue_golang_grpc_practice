package sandbox

import (
	"log"

	"golang.org/x/net/context"
)

// Server ... field value
type Server struct {
	libraryName string
}

// GetLibralyName ... return library name
func (s *Server) GetLibralyName(ctx context.Context, param *GetLibraryNameParam) (*LibraryName, error) {
	log.Printf("get library name")
	s.libraryName = "java"
	ln := &LibraryName{Name: s.libraryName}
	return ln, nil
}