class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
  end

  def show
    @planet = Planet.find params[:id]
  end

  def new
  end

  def create
    planet = Planet.create :name => params[:name], :image => params[:image], :orbit => params[:orbit], :diameter => params[:diameter], :mass => params[:mass], :moons => params[:moons]
    redirect_to planet_path(planet.id) # show page
  end

  def edit
    @planet = Planet.find params[:id]
  end

  def update
    planet = Planet.find params[:id]
    planet.name = params[:name]
    planet.image = params[:image]
    planet.orbit = params[:orbit]
    planet.diameter = params[:diameter]
    planet.mass = params[:mass]
    planet.moons = params[:moons]
    planet.save
    redirect_to planet_path(planet.id) # GET show
  end

  def destroy
    planet = Planet.find params[:id]
    planet.destroy
    redirect_to planets_path
  end
end
